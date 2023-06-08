function lastCommit(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': "GIT_TOKEN"}})
        .then(response => response.json()
            .then(events => {
                for(let event of events) {
                    if (event.type === "PushEvent") {
                        let lastPush = event
                        console.log(lastPush[0]["created_at"]);
                    }

                }
            })
        )
}