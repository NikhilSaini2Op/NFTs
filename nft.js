// Define an array to hold NFTs
const nftsArray = [];

// Function to mint an NFT and store its metadata
function mintNFT(name, eyecolor, shirtType, bling) {
    // Create an object for the NFT
    const nft = {
        name: name,
        eyecolor: eyecolor,
        shirtType: shirtType,
        bling: bling
    };
    
    // Add the NFT to the array
    nftsArray.push(nft);
    
    // Print a message indicating the minting
    console.log("Minted: " + name);
}

// Function to list all NFTs and their metadata
function listNFTs() {
    // Iterate through the array and print NFT metadata
    nftsArray.forEach((nft, index) => {
        console.log("\nID: " + (index + 1));
        console.log("Name: " + nft.name);
        console.log("Eyecolor: " + nft.eyecolor);
        console.log("ShirtType: " + nft.shirtType);
        console.log("Bling: " + nft.bling);
    });
}

// Function to get the total supply of NFTs
function getTotalSupply() {
    console.log("\nTotal Supply: " + nftsArray.length);
}

// Call the mintNFT function to create NFTs
mintNFT("Nikhil", "Blue", "Hoodie", "Ring");
mintNFT("Heet", "Green", "Kurta", "Watch");
mintNFT("Mahesh", "Brown", "Tee", "Shades");
mintNFT("Ayush", "Black", "Sweater", "Bracelet");
mintNFT("Pratham", "Dark Brown", "Shirt", "Shades");

// Call the listNFTs function to display NFTs
listNFTs();

// Call the getTotalSupply function to display total supply
getTotalSupply();
