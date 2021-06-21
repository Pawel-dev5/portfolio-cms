import { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { Header } from './components/Header';

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
  const [appState, setAppState] = useState({
    isLoading: true
  })
  const [data, setData] = useState([]);
  const [translateData, setTranslateData] = useState([]);
  const [lang, setLang] = useState({
    PL: true
  });

  const toggleLang = () => {
    setLang((prevState) => ({
      ...prevState,
      PL: !prevState.PL,
    }));
    if (lang.PL === true) {
      return setTranslateData(data.EN)
    } else setTranslateData(data.PL)
  }
  // READ DATA
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

  return (
    <>
      {appState.isLoading ? (
        <div className="App">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <div className="App">
          {/* <Menu className="container" data={translateData.main} toggleLang={toggleLang} /> */}
          <Header data={translateData.main} />
          {/* <AboutMe data={translateData.main} />
          <Work data={translateData.resume} />
          <Portfolio data={translateData.portfolio} />
          <Tech data={translateData.resume} />
          <Footer className="container" data={translateData} /> */}
        </div>
      )}
    </>
  )
}

export default App;
