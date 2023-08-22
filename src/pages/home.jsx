import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,Button,f7
} from 'framework7-react';

const HomePage = () => {
     const navigateToBarCode = () => {
        f7.views.main.router.navigate('/barcode-reader/');
    };


    return (
        <Page>
            <Navbar title="Barcode Scanner Test" />
            <div className="centered-container">
                <Button fill onClick={navigateToBarCode}>
                    Read Barcode
                </Button>
            </div>


        </Page>
    );
};
export default HomePage;