const remoteURL = "http://localhost:5002"
const directionAPIManager = {
    getAllDirections: () => {
        return fetch("http://localhost:5002/directions")
        .then(directions => directions.json());
    },
    getOneDirection: (id) => fetch(`${remoteURL}/directions/${id}`).then(direction => direction.json()),
    put(editedDirection) {
      return fetch(`${remoteURL}/directions/${editedDirection.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedDirection)
      }).then(data => data.json());
    },
    deleteDirection: (id) => {
        return fetch(`http://localhost:5002/directions/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json()
        );
    },
    postDirection(newDirection) {
        return fetch(`${remoteURL}/directions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newDirection)
        }).then(data => data.json())
      }
};

export default directionAPIManager;