
// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
];
// Part 3:
const nav = document.querySelector("nav");
// add nav bar
for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];
    var menuItem = document.createElement("a");
    menuItem.textContent = link.text;
    menuItem.href = link.href;
    nav.appendChild(menuItem);
}
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
// var('--main-bg')=document.querySelector(mainEl).style.backgroundColor
// Part 2:
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const subMenuEl = document.getElementById("sub-menu");

// Set the height of subMenuEl element to be "100%"
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = getComputedStyle(
    document.documentElement
).getPropertyValue("--sub-menu-bg");

// Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = "0";

var menuLinks = [
    { text: "about", href: "/about" },
    {
        text: "catalog",
        href: "#",
        subLinks: [
            { text: "all", href: "/catalog/all" },
            { text: "top selling", href: "/catalog/top" },
            { text: "search", href: "/catalog/search" },
        ],
    },
    {
        text: "orders",
        href: "#",
        subLinks: [
            { text: "new", href: "/orders/new" },
            { text: "pending", href: "/orders/pending" },
            { text: "history", href: "/orders/history" },
        ],
    },
    {
        text: "account",
        href: "#",
        subLinks: [
            { text: "profile", href: "/account/profile" },
            { text: "sign out", href: "/account/signout" },
        ],
    },
];
// Select and cache all <a> elements inside of topMenuEl in a variable named topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener("click", function (event) {
    // Prevent the default behavior of the click event
    event.preventDefault();

    // Return if the clicked element was not an <a> element
    if (!event.target.matches("a")) {
        return;
    }

    // Log the content of the <a> to verify the handler is working
    console.log(event.target.textContent.toLowerCase());

    // Add or remove the 'active' class based on the current state
    if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
    } else {
        // Remove the 'active' class from each other <a> element in topMenuLinks
        topMenuLinks.forEach(function (link) {
            link.classList.remove("active");
        });
        event.target.classList.add("active");
    }
});

// Helper function to build the submenu
function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = "";

    // Iterate over the subLinks array
    subLinks.forEach(function (link) {
        // Create an <a> element
        const subMenuItem = document.createElement("a");

        // Add href attribute
        subMenuItem.href = link.href;

        // Set content
        subMenuItem.textContent = link.text;

        // Append to subMenuEl
        subMenuEl.appendChild(subMenuItem);
    });
}

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener("click", function (event) {
    // Prevent the default behavior of the click event
    event.preventDefault();

    // Return if the clicked element was not an <a> element
    if (!event.target.matches("a")) {
        return;
    }

    // Toggle the 'active' class on the clicked <a> element
    event.target.classList.toggle("active");

    // Toggle submenu visibility based on the 'active' class
    if (event.target.classList.contains("active")) {
        // Get the link object from menuLinks
        const linkObject = menuLinks.find(
            (link) => link.text === event.target.textContent.toLowerCase()
        );

        // Show or hide the submenu based on the presence of subLinks property
        if (linkObject.subLinks) {
            subMenuEl.style.top = "100%";
            // Build the submenu
            buildSubmenu(linkObject.subLinks);
        } else {
            subMenuEl.style.top = "0";
        }
    } else {
        // Hide the submenu
        subMenuEl.style.top = "0";
    }
});

// /8**************************/;
// Helper function to build the submenu
function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = "";

    // Iterate over the subLinks array
    subLinks.forEach(function (link) {
        // Create an <a> element
        const subMenuItem = document.createElement("a");

        // Add href attribute
        subMenuItem.href = link.href;

        // Set content
        subMenuItem.textContent = link.text;

        // Append to subMenuEl
        subMenuEl.appendChild(subMenuItem);
    });
}

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener("click", function (event) {
    // Prevent the default behavior of the click event
    event.preventDefault();

    // Return if the clicked element was not an <a> element
    if (!event.target.matches("a")) {
        return;
    }

    // Toggle the 'active' class on the clicked <a> element
    event.target.classList.toggle("active");

    // Toggle submenu visibility based on the 'active' class
    if (event.target.classList.contains("active")) {
        // Get the link object from menuLinks
        const linkObject = menuLinks.find(
            (link) => link.text === event.target.textContent.toLowerCase()
        );

        // Show or hide the submenu based on the presence of subLinks property
        if (linkObject.subLinks) {
            subMenuEl.style.top = "100%";
            // Build the submenu
            buildSubmenu(linkObject.subLinks);
        } else {
            subMenuEl.style.top = "0";
        }
    } else {
        // Hide the submenu
        subMenuEl.style.top = "0";
    }
});

// Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener("click", function (event) {
    // Prevent the default behavior of the click event
    event.preventDefault();

    // Return if the clicked element was not an <a> element
    if (!event.target.matches("a")) {
        return;
    }

    // Log the content of the <a> to verify the handler is working
    console.log(event.target.textContent);

    // Set the CSS top property of subMenuEl to 0
    subMenuEl.style.top = "0";

    // Remove the active class from each <a> element in topMenuLinks
    topMenuLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    // Update the contents of mainEl to the contents of the <a> element clicked within subMenuEl
    mainEl.innerHTML = "<h1>" + event.target.textContent + "</h1>";
    //If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
    if ((event.target.textContent == "about") | "ABOUT") {
        mainEl.innerHTML = "<h1>About</h1>";
    }
});



