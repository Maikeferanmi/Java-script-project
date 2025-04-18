import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const auth = getAuth();

window.logout = function() {
    auth.signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "Home.html";
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
}