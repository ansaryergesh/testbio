import { useEffect, useState } from "react"
import VeriLive from "../components/Verigram/VeriLive"
import axios from 'axios'
import VeriDoc from "../components/Verigram/VeriDoc"
const TestCheck = () => {
  const [step,setStep] = useState(1)
  const [livePhoto,setLivePhoto] = useState(null)
  const [liveDoc,setLiveDoc] = useState(null)
  const [file,setFile] = useState(null)
  const [fileDoc,setFileDoc] = useState(null)


  function urltoFile(url, filename, mimeType){
    mimeType = mimeType || (url.match(/^data:([^;]+);/)||'')[1];
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename, {type:mimeType});})
    );
  }

  function livePhotoHandle() {
    if(livePhoto!== null) {
      const photoBase = livePhoto.bestFrame
      // console.log(photo.bestFrame)
      urltoFile(photoBase, 'a.png')
      .then(function(file){
        setFile(file)})
    }
  }

  function liveDocHandle() {
    if(liveDoc !== null) {
      // console.log(liveDoc)
      urltoFile(liveDoc, 'doc.png', 'image/jpeg')
        .then(function(file) {
          setFileDoc(file)
        })
    }
  }
  function checkSimilar() {
    if(fileDoc!== null) {
      // console.log(fileDoc)
      var bodyFormData = new FormData();
      const API_URL = 'https://services.verigram.ai:8443/veriface'
      const config = {
        headers: {
          apiKey: process.env.BIO_KEY,
          'Content-Type': 'multipart/form-data'
        }
      }
      bodyFormData.append('doc', fileDoc)
      bodyFormData.append('photo', file)
      return  axios.post(API_URL,bodyFormData, config)
      .then(res=> {
        console.log(res)
        swal("Процент совместимости", `${res.data.Similarity}`, "info").then(() => {
          location.reload()
        })
      })
      .catch(err=> {
        if(err.response) {
          console.log(err.response)
          // console.log(err.response.config.data.get('photo'))
        }
      })
    }
  }

  useEffect(() => {
    liveDocHandle()
  }, [liveDoc])

  useEffect(() => {
    checkSimilar()
  }, [fileDoc])

  useEffect(() => {
    livePhotoHandle()
    console.log('live photo changed')
    console.log(livePhoto)
  },[livePhoto])

  useEffect(() => {
    console.log(file)
    console.log('checking')
    if(file !== null) {
      setStep(2)
    }
    // var bodyFormData = new FormData();
    // const API_URL = 'https://services.verigram.ai:8443/veriface'
    // const config = {
    //   headers: {
    //     apiKey: process.env.BIO_KEY,
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }
    // bodyFormData.append('doc', file)
    // bodyFormData.append('photo', file)
    // return  axios.post(API_URL,bodyFormData, config)
    // .then(res=> {
    //   console.log(res)
    // })
    // .catch(err=> {
    //   if(err.response) {
    //     console.log(err.response)
    //     console.log(err.response.config.data.get('photo'))
    //   }
    // })
  }, [file])
  return(
    <div>
      {step === 1 && <VeriLive setLivePhoto={setLivePhoto} />}
      {step === 2 && <VeriDoc setLiveDoc={setLiveDoc}/>}
      {/* <VeriDoc setLiveDoc={setLiveDoc}/> */}
    </div>
  )
}


export default TestCheck;