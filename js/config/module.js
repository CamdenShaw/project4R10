import Realm from 'realm'

const FavSchema = {
    name: "Fav",
    primaryKey: "id",
    properties: {
        id: "string",
        faved_on: 'date'
    }
}

const realm = new Realm({schema: [FavSchema]})

export const queryFavs = () => {
    return realm.objects('Fav')
}

export const deleteFav = (favId) => {
    let fav = realm.objects('Fav').filtered("id == $0", favId)
    try {
        realm.write(() => {
            realm.delete(fav)
        })
    } catch (e) {
        console.log("error deleting fav", e)
    }
}

export const createFav = (session_id) => {
    try {
        realm.write(() => {
            realm.create('Fav', {id: session_id, faved_on: new Date()})
        })
    } catch (e) {
        console.log("error creating fav", e)
    }
}

export default realm