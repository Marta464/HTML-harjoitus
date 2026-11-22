import json
import os
from flask import Flask, jsonify, request

app = Flask(__name__)

# Etsitään dictionary.json aina samasta kansiosta kuin tämä app.py-tiedosto
KANSIO = os.path.dirname(os.path.abspath(__file__))
TIEDOSTO_POLKU = os.path.join(KANSIO, "dictionary.json")


# tarkistaa onko luku alkuluku
def onko_alkuluku(luku):
    if luku < 2:
        return False
    for i in range(2, luku):
        if luku % i == 0:
            return False
    return True


# lukee sanakirjan tiedostosta
def lue_sanakirja():
    with open(TIEDOSTO_POLKU, "r", encoding="utf-8") as tiedosto:
        return json.load(tiedosto)


# tallentaa sanakirjan tiedostoon
def tallenna_sanakirja(sanakirja):
    with open(TIEDOSTO_POLKU, "w", encoding="utf-8") as tiedosto:
        json.dump(sanakirja, tiedosto, indent=2, ensure_ascii=False)


# Alkuluvun tarkistus
@app.route("/prime_number/<int:number>")
def prime_number(number):
    tulos = onko_alkuluku(number)
    return jsonify({"Number": number, "isPrime": tulos})


#Sanan kääntäminen
@app.route("/translate/<word>")
def translate(word):
    sanakirja = lue_sanakirja()
    sana_pienella = word.lower()

    for en_sana, fi_sana in sanakirja.items():
        if en_sana.lower() == sana_pienella:
            return jsonify({"English": en_sana, "Finnish": fi_sana})

    return jsonify({"error": "Word not found"}), 404


#Palauttaa kaikki englanninkieliset sanat listana
@app.route("/words")
def words():
    sanakirja = lue_sanakirja()
    return jsonify(list(sanakirja.keys()))


#Uuden sanan lisääminen sanakirjaan
@app.route("/add")
def add_word():
    en = request.args.get("en")
    fi = request.args.get("fi")

    if not en or not fi:
        return jsonify({"error": "Missing 'en' or 'fi' parameter"}), 400

    sanakirja = lue_sanakirja()
    sanakirja[en.lower()] = fi.lower()
    tallenna_sanakirja(sanakirja)

    return jsonify({
        "message": "Word added",
        "English": en.lower(),
        "Finnish": fi.lower()
    })


if __name__ == "__main__":
    app.run(port=3000, debug=True)
