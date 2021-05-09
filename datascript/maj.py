import wget
import os
import json


def updateToilets(url):
    print("\nMISE A JOUR DU FICHIER TOILETTES\n")

    if os.path.exists("toilettesPARIS.geojson"):
        os.remove("toilettesPARIS.geojson")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"toilettesPARIS.geojson")
    print("\nFichier téléchargé")


def updateVelib(url):
    print("\nMISE A JOUR DU FICHIER STATIONS VELIB\n")

    if os.path.exists("velib.kml"):
        os.remove("velib.kml")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"velib.kml")
    print("\nFichier téléchargé")

def updateParking(url):
    print("\nMISE A JOUR DU FICHIER PARKING A VELO\n")

    if os.path.exists("parkingIDF.json"):
        os.remove("parkingIDF.json")
        print("Fichier préexistant sur l'ordinateur supprimé")

    doc=wget.download(url,"parkingIDF.json")
    print("\nFichier téléchargé")

def updatePump(url):
    print("\nMISE A JOUR DU FICHIER POMPES\n")

    if os.path.exists("pompes"):
        os.remove("pompes")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"pompes")
    print("\nFichier téléchargé")

def updateFontaines(url):
    print("\nMISE A JOUR DU FICHIER FONTAINES\n")

    if os.path.exists("fontainesPARIS.geojson"):
        os.remove("fontainesPARIS.geojson")
        print("Fichier préexistant sur l'ordinateur supprimé")

    doc=wget.download(url,"fontainesPARIS.geojson")
    print("\nFichier téléchargé")



if os.path.isfile("url.json")==True:
    with open("url.json") as url_file:
        urls=json.load(url_file)

os.chdir("../website/data")

updateToilets(urls["toilettes"])
updateVelib(urls["velib"])
updateParking(urls["parking"])
updatePump(urls["pompe"])
updateFontaines(urls["fontaines"])