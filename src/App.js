import { useState, useEffect } from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import messages from '../src/components/messages';
import { IntlProvider } from 'react-intl';
import Layout from '../src/components/Layout';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [locale, setLocale] = useState('en');
  const [appState, setAppState] = useState({
    isLoading: true
  })
  const [data, setData] = useState([]);
  const [translateData, setTranslateData] = useState([]);
  const [toggledLang, setToggledLang] = useState(false);
  const [lang, setLang] = useState({
    PL: true
  });
  const [fireChangeLang, setFireChangeLang] = useState('EN');

  // READ DATA FROM FIREBASE
  useEffect(() => {
    const ref = firebase.database().ref();
    ref.on("value", snapshot => {
      const fetchData = snapshot.val()
      setData(fetchData)
      setTranslateData(fetchData.PL)
      setAppState({
        isLoading: false
      })
    });
    // Clean-up function
    return () => ref.off("value");
  }, []);

  // Toggle language of read data from firebase
  const toggleLang = (checked) => {
    setLang((prevState) => ({
      ...prevState,
      PL: !prevState.PL,
    }));
    setToggledLang(checked)
    if (lang.PL === true) {
      setTranslateData(data.EN)
    } else setTranslateData(data.PL)
    // FIREBASE OPERATION CHANGING LANGUAGE FUNCTION
    // console.log(toggledLang)
    // if (toggledLang) {
    //   setFireChangeLang('EN')
    //   console.log(fireChangeLang)
    // } else {
    //   setFireChangeLang('PL')
    //   console.log(fireChangeLang)
    // }
  }


  return (
    <>
      {appState.isLoading ? (
        <div className="App">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Layout
            setLocale={setLocale}
            data={translateData}
            setAppState={setAppState}
            toggleLang={toggleLang}
            toggledLang={toggledLang}
            fireChangeLang={fireChangeLang}
          />
        </IntlProvider>
      )}
    </>
  )
}

export default App;
