<<<<<<< HEAD
// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("solid", window.scrollY > 50);
  });
  
  // Crypto Icons and Dots for Background with Parallax Effect
  const cryptoIcons = [
    "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
    "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
    "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022",
    "https://cryptologos.cc/logos/ripple-xrp-logo.png?v=022",
    "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022",
    "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const cryptoBg = document.getElementById("crypto-bg");
    const iconCount = 20; // Number of crypto icons
    const dotCount = 30; // Number of dots
  
    // Create and position crypto icons
    for (let i = 0; i < iconCount; i++) {
      const icon = document.createElement("img");
      icon.src = cryptoIcons[Math.floor(Math.random() * cryptoIcons.length)];
      icon.classList.add("crypto-icon");
      icon.style.left = `${Math.random() * 100}vw`;
      icon.style.top = `${Math.random() * 100}vh`;
      cryptoBg.appendChild(icon);
    }
  
    // Create and position dots
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.top = `${Math.random() * 100}vh`;
      cryptoBg.appendChild(dot);
    }
  
    // Parallax effect for icons and dots
    document.addEventListener("mousemove", (event) => {
      const icons = document.querySelectorAll(".crypto-icon");
      const dots = document.querySelectorAll(".dot");
  
      // Parallax for icons
      icons.forEach((icon, index) => {
        const speed = (index % 5) + 1;
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
  
      // Parallax for dots
      dots.forEach((dot, index) => {
        const speed = (index % 3) + 1;
        const x = (window.innerWidth - event.pageX * speed) / 200;
        const y = (window.innerHeight - event.pageY * speed) / 200;
        dot.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });
  // Select all buttons with a data-target attribute
document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', function() {
      // Get the target section ID from the data-target attribute
      const target = this.getAttribute('data-target');
      // Scroll smoothly to the target section
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // JavaScript for Toggling Menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });
=======
// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("solid", window.scrollY > 50);
  });
  
  // Crypto Icons and Dots for Background with Parallax Effect
  const cryptoIcons = [
    "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
    "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
    "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=022",
    "https://cryptologos.cc/logos/ripple-xrp-logo.png?v=022",
    "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022",
    "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const cryptoBg = document.getElementById("crypto-bg");
    const iconCount = 20; // Number of crypto icons
    const dotCount = 30; // Number of dots
  
    // Create and position crypto icons
    for (let i = 0; i < iconCount; i++) {
      const icon = document.createElement("img");
      icon.src = cryptoIcons[Math.floor(Math.random() * cryptoIcons.length)];
      icon.classList.add("crypto-icon");
      icon.style.left = `${Math.random() * 100}vw`;
      icon.style.top = `${Math.random() * 100}vh`;
      cryptoBg.appendChild(icon);
    }
  
    // Create and position dots
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.top = `${Math.random() * 100}vh`;
      cryptoBg.appendChild(dot);
    }
  
    // Parallax effect for icons and dots
    document.addEventListener("mousemove", (event) => {
      const icons = document.querySelectorAll(".crypto-icon");
      const dots = document.querySelectorAll(".dot");
  
      // Parallax for icons
      icons.forEach((icon, index) => {
        const speed = (index % 5) + 1;
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
  
      // Parallax for dots
      dots.forEach((dot, index) => {
        const speed = (index % 3) + 1;
        const x = (window.innerWidth - event.pageX * speed) / 200;
        const y = (window.innerHeight - event.pageY * speed) / 200;
        dot.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });
  // Select all buttons with a data-target attribute
document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', function() {
      // Get the target section ID from the data-target attribute
      const target = this.getAttribute('data-target');
      // Scroll smoothly to the target section
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // JavaScript for Toggling Menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });
>>>>>>> 5804b6f (Initial commit)
  