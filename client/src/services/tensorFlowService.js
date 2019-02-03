export default class TensorFlowService {
  constructor() {
    this.image = {};
    this.imageObject = {};
    this.mobileNet = {};
  }

  initLib() {
    return new Promise((resolve, reject) => {
      this.mobileNet= ml5.imageClassifier('MobileNet', ()=> {
        resolve(true);
      });
    });
  }

  initPredict(id) {
    let image = document.getElementById(id);
    return new Promise((resolve, reject) => {
      this.mobileNet.predict(image, (err, res)=> {
          resolve(res);
      });
    });
  }
}
