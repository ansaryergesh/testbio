

import { useEffect } from "react";
import swal from "sweetalert";

const VeriLive = ({livePhoto, setLivePhoto, file, setFile}) => {
  const url = "https://face.verigram.ai/verilive"
  const apiKey = 'process.env.BIO_KEY'
  const  config = {
    'recordVideo': false,
    'rotated': false,
    'lang': "kz",

    'render': {
        'oval': true,
        'faceContourInsteadOfOval': true,
        'ovalRingColor': {
            'default': '#F5F542',
            'actionSuccess': '#00F500',
            'actionFailure': '#F50000',
            'sessionSuccess': '#00F500',
            'sessionFailure': '#F50000',
        },
        'ovalWidth': 1.0,

        'overlay': true,
        'overlayColor': {
            'default' : '#2F4F4F',
        },
        'overlayTransparency': {
            'default': 0.55,
        },

        'arrow': true,
        'arrowColor': {
            'default': '#F0F0F0',
        },
        'arrowProgressColor': {
            'default': '#404040',
        },

        'hint': true,
        'hintTextColor': {
            "default": "#C8C9CC",
        },
        'hintFontType': "Arial",
        'hintUseProgressiveFontSize': true,
        'hintProgressiveFontSizeMultiplier': 1.0,
        'hintFontSize': 25,
        "hintCloudColor": {
            "default": "#2D312F",
        },
    },

    'hints': {
        'noHint': '',
        'noFace': 'Вас Не Видно',
        'badLight': "Выравните Освещение",
        'closer': 'Ближе',
        'away': 'Отдалитесь',
        'closerToCenter': 'Ближе к Центру Экрана',

        'targetLeft': 'Медленно Поворачивайте Голову Влево',
        'targetRight': 'Медленно Поворачивайте Голову Вправо',
        'targetCenter': 'Посмотрите Прямо',

        'sessionSuccess': 'Вы Прошли!',
        'sessionFailure': 'Вы Не Прошли!',
        'sessionError': 'Произошла какая-то ошибка. Попробуйте перезапустить',
    },

  };

  function successCallback(data) {
    // E.g. Show results to user
    // document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    const result = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;")
    setLivePhoto(JSON.parse(result))
  }

  // Failure VeriLive json results
  function failCallback(data) {
    // E.g. Show to user, say to retry again
    // document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");

    setLivePhoto(JSON.stringify(data, undefined, 2).replace(/</g, "&lt;"))
  }

  function errorCallback(data) {
    // E.g. Show to user, say to retry again
    const base64img = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    // document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    // setLivePhoto(dataURLtoFile(base64img))
  }

  function updateCallback(data) {
    // console.log(data);
  }
  function onStartButtonClick() {
    const token = verilive.start();
    console.log(verilive.name + ': Token - ' + token);
  }

  useEffect(() => {
    verilive.init(url, apiKey, successCallback, failCallback, errorCallback, updateCallback, config)
      .then(() => {
        swal("Проверка 'живости'", `Если вы готовы нажмите кнопку OK`, "info").then(() => {
          onStartButtonClick()
        })
      })
  },[])

  return(
    <div>
      <button className='check' onClick={() => checkButton()}></button>
      <div id="id_verilive"></div>
    </div>
  )
}

export default VeriLive;