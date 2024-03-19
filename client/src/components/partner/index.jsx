import React from 'react';

const PartnerSection = () => {
    return (
        <div style={styles.partnerSection}>
            <div style={styles.textContainer}>
                <p style={styles.text}>WE'VE BEEN TRUSTED BY MORE THAN 300 ORGANISATIONS</p>
            </div>
            <div style={styles.logoContainer}>
                {/* Replace `logo1.png` with your actual logo file paths */}
                <img style={styles.logo} src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/6485969255c5edc7b1326d48_finapi.png" alt="FinAPI" />
                <img style={styles.logo} src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/648598f7f4715910f51144eb_finleap.png" alt="Finleap Connect" />
                <img style={styles.logo} src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/6485951114507f85e62d92f1_direct-id.png" alt="DirectID" />
                {/* Add more logos as needed */}
                <img style={styles.logo} src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/648596929fa76cfaa3b62222_finway.png" alt="Finway" />
                <img style={styles.logo} src="https://uploads-ssl.webflow.com/645e460a3fe815e7de3dc6de/64859691fb4421d11bbe25fd_picksell.png" alt="PickSell" />
            </div>
        </div>
    );
};

const styles = {
    partnerSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4', // This should match the background color of your section
        padding: '50px 0', // Adjust the padding as necessary
    },
    textContainer: {
        marginBottom: '20px', // Spacing between text and logos
    },
    text: {
        color: '#333', // This should be the color of your text
        fontSize: '1rem', // Adjust the font size as necessary
        textAlign: 'center', // This centers the text horizontally
        fontWeight: 'bold', // Make the text bold
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'space-around', // This spreads out the logos evenly
        alignItems: 'center',
        flexWrap: 'wrap', // This allows logos to wrap on smaller screens
        maxWidth: '1200px', // Adjust the max width as necessary
    },
    logo: {
        marginLeft: '40px',
        marginRight: '40px',
        maxWidth: '100px',
        maxHeight: '50px',
        opacity: 0.5,
        transition: 'opacity 0.3s ease-in-out',
    },
};

export default PartnerSection;
