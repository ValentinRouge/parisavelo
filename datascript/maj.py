import wget
import os
import json


def updateToilets(url):
    print("\nMISE A JOUR DU FICHIER TOILETTES\n")

    if os.path.exists("sanisettesparis.kml"):
        os.remove("sanisettesparis.kml")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"sanisettesparis.kml")
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

    if os.path.exists("parking"):
        os.remove("parking")
        print("Fichier préexistant sur l'ordinateur supprimé")

    doc=wget.download(url,"parking")
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

    if os.path.exists("fontaines"):
        os.remove("fontaines")
        print("Fichier préexistant sur l'ordinateur supprimé")

    doc=wget.download(url,"fontaines")
    print("\nFichier téléchargé")



if os.path.isfile("url.json")==True:
    with open("url.json") as url_file:
        urls=json.load(url_file)
elif os.path.isfile("./datascripturl.json")==True:
    with open("./datascript/url.json") as url_file:
        urls=json.load(url_file)


os.chdir("../data")

updateToilets(urls["toilettes"])
updateVelib(urls["velib"])
updateParking(urls["parking"])
updatePump(urls["pompe"])
updateFontaines(urls["fontaine"])