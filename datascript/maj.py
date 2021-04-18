import wget
import os


def updateToilets():
    url="https://opendata.paris.fr/explore/dataset/sanisettesparis/download/?format=kml&timezone=Europe/Berlin&lang=fr"
    print("\nMISE A JOUR DU FICHIER TOILETTES\n")

    if os.path.exists("sanisettesparis.kml"):
        os.remove("sanisettesparis.kml")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"sanisettesparis.kml")
    print("\nFichier téléchargé")


def updateVelib():
    url="https://opendata.paris.fr/explore/dataset/velib-emplacement-des-stations/download/?format=kml&timezone=Europe/Berlin&lang=fr"
    print("\nMISE A JOUR DU FICHIER STATIONS VELIB\n")

    if os.path.exists("velib.kml"):
        os.remove("velib.kml")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"velib.kml")
    print("\nFichier téléchargé")

def updateParking():
    url="https://overpass-api.de/api/interpreter?data=%5Bout%3Axml%5D%5Btimeout%3A25%5D%3B%28node%5B%22amenity%22%3D%22bicycle%5Fparking%22%5D%5B%22access%22%21%3D%22customers%22%5D%5B%22access%22%21%3D%22private%22%5D%5B%22access%22%21%3D%22no%22%5D%2848%2E724944057612%2C2%2E0468902587891%2C49%2E040568696317%2C2%2E6264190673828%29%3Bway%5B%22amenity%22%3D%22bicycle%5Fparking%22%5D%5B%22access%22%21%3D%22customers%22%5D%5B%22access%22%21%3D%22private%22%5D%5B%22access%22%21%3D%22no%22%5D%2848%2E724944057612%2C2%2E0468902587891%2C49%2E040568696317%2C2%2E6264190673828%29%3Brelation%5B%22amenity%22%3D%22bicycle%5Fparking%22%5D%5B%22access%22%21%3D%22customers%22%5D%5B%22access%22%21%3D%22private%22%5D%5B%22access%22%21%3D%22no%22%5D%2848%2E724944057612%2C2%2E0468902587891%2C49%2E040568696317%2C2%2E6264190673828%29%3B%29%3Bout%20center%3B%3E%3Bout%20skel%20qt%3B%0A"
    print("\nMISE A JOUR DU FICHIER PARKING A VELO\n")

    if os.path.exists("parking"):
        os.remove("parking")
        print("Fichier préexistant sur l'ordinateur supprimé")

    doc=wget.download(url,"parking")
    print("\nFichier téléchargé")

def updatePump():
    url="https://overpass-api.de/api/interpreter?data=%5Btimeout%3A25%5D%5Bout%3Axml%5D%3B%28node%5B%22service%3Abicycle%3Apump%22%3D%22yes%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Bway%5B%22service%3Abicycle%3Apump%22%3D%22yes%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Brelation%5B%22service%3Abicycle%3Apump%22%3D%22yes%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Bnode%5B%22service%3Abicycle%3Atools%22%3D%22yes%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Bway%5B%22service%3Abicycle%3Atools%22%3D%22yes%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Brelation%5B%22service%3Abicycle%3Atools%22%3D%22yes%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Bnode%5B%22amenity%22%3D%22bicycle%5Frepair%5Fstation%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Bway%5B%22amenity%22%3D%22bicycle%5Frepair%5Fstation%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3Brelation%5B%22amenity%22%3D%22bicycle%5Frepair%5Fstation%22%5D%5B%22shop%22%21%7E%22%2E%2A%22%5D%2848%2E785604416034%2C2%2E1873092651367%2C48%2E943474752251%2C2%2E4770736694336%29%3B%29%3Bout%20center%3B%3E%3Bout%20skel%20qt%3B%0A"
    print("\nMISE A JOUR DU FICHIER POMPES\n")

    if os.path.exists("pompes"):
        os.remove("pompes")
        print("Fichier préexistant sur l'ordinateur supprimé")

    wget.download(url,"pompes")
    print("\nFichier téléchargé")

def updateFontaines():
    url="https://overpass-api.de/api/interpreter?data=%5Bout%3Axml%5D%5Btimeout%3A25%5D%3B%28node%5B%22amenity%22%3D%22drinking%5Fwater%22%5D%2848%2E724038124336%2C2%2E0489501953125%2C49%2E039668462281%2C2%2E6284790039062%29%3Bway%5B%22amenity%22%3D%22drinking%5Fwater%22%5D%2848%2E724038124336%2C2%2E0489501953125%2C49%2E039668462281%2C2%2E6284790039062%29%3Brelation%5B%22amenity%22%3D%22drinking%5Fwater%22%5D%2848%2E724038124336%2C2%2E0489501953125%2C49%2E039668462281%2C2%2E6284790039062%29%3B%29%3Bout%20center%3B%3E%3Bout%20skel%20qt%3B%0A"
    print("\nMISE A JOUR DU FICHIER FONTAINES\n")

    if os.path.exists("fontaines"):
        os.remove("fontaines")
        print("Fichier préexistant sur l'ordinateur supprimé")

    doc=wget.download(url,"fontaines")
    print("\nFichier téléchargé")


os.chdir("../data")

updateToilets()
updateVelib()
updateParking()
updatePump()
updateFontaines()