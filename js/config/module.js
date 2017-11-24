import Realm from 'realm'

const FavSchema = {
    name: "Fav",
    primaryKey: "id",
    properties: {
        id: "string",
        faved_on: 'date'
    }
}

export const realm = new Realm({schema: [FavSchema]})

export const queryFavs = (id = 'noId') => {
    if(id !== "noId"){ 
        let fav = realm.objects('Fav').filtered("id == $0", id)
        if(!fav) return
        else return fav
    } else {
        return realm.objects('Fav')
    }
}

export const deleteFav = (favId) => {
    let fav = realm.objects('Fav').filtered("id == $0", favId)
    console.log(fav[0].id, fav[0].faved_on)
    try {
        console.log("trying to delete fav", fav)
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
            console.log(session_id)
            realm.create('Fav', {id: `${session_id}`, faved_on: new Date()})
        })
    } catch (e) {
        console.log("error creating fav", e)
    }
}

export default realm