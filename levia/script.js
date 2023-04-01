function messageTwitter() {
    const twitterLink = "https://twitter.com/intent/tweet?text=";
    const message = "Just applied for the WL of @ChessFi, an Auto-staking & Compounding protocol built on #Zksync.\n\nRegister Now: chessfi.xyz";
    const encodedMessage = encodeURIComponent(message);
    window.open(`${twitterLink}${encodedMessage}`, "_blank");
}

