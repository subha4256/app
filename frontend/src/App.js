import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ 
            backgroundColor: "#282c34", 
            color: "white", 
            height: "100vh", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            fontSize: "24px" 
        }}>
            {message}
        </div>
    );
}

export default App;

