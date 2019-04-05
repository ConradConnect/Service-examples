exports.styles = `
<style type="text/css">
  html, body {
      height: 100%;
  }
  .maincon {
      height: calc(100% - 50px);
  }
  .main-wrapper {
      margin-left: 5px;
      position: relative;
  }
  .image-wrapper {
    height: 100%;
  }  
  .clear-float {
    clear: both;
  }
  .userInputs {
      margin-top: 30px;
      padding-right: 0px !important;
  }
  .welcomeText {
      font-size: 24px;
      color: #666666;
  }

  .subscribe-first {
    font-size: 22px;
    color: #666666;
  }
  .form-title {
      font-size: 16px;
  }
  .label {
      color: #666666 !important;
  }
  .widget-padding {
    padding-left: 10px;
  }
  .stock-form{ 
      margin-top: 30px;
  }
  .custom {
      padding-top: 10px !important;
      margin-bottom: 30px !important;
  }  

  .preview {
      margin-top: 25px;
  }
  .company-name {
      font-size: 24px;
      color: #666666;
      margin-bottom: 0px;
      font-weight: bold;
  }
  .company-index {
      color: #666666;
      font-size: 14px;
  }
  .preview-title {
      color: #000000;
      font-size: 12px;
      margin-bottom: 2px !important;
  }
  .preview-value {
      color: #666666;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 8px !important;
  }
  .preview-summary {
      color: #666666;
      font-size: 16px;
      margin-top: 10px;
  }
  .stock-grid {
      padding-left: 0px !important;
      padding-right: 0px !important;
  }
  .stock-grid > p {
    margin: 0px !important;
  }
  .send-button {
      background-color: #0098dd !important;
      border-radius: 30px !important;
      width: 300px;
      height: 35px;
      font-size: 16px;
      font-weight: bold !important;
      border: none;
      color: white !important;
      text-decoration: none;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      right: 0;
  }
  input, input::placeholder {
    color: #666666 !important;
  }
  .error {
      color: red;
      margin-top: 10px;
      padding-bottom: 30px;
  }
  .form-error {
    border-bottom: 1px solid #ff0000;
  }
  .color-green {
    color: #00CD6F;
  }
  .color-red {
    color: #ff0000;  
  }
  .serviceConfiguredText{
      font-size: 24px;
      color: #666666;
      margin-left: 15px;
  }
  .api-key {
      font-size:12px;
      color: #0098DD;
      float: right;
      margin-top: 5px;
  }
  .custom-margin {
    margin-top: 40px;
  }
  .success-image {
    background: url('static/subGood.png');
    width: 100%;
    height: calc(100% - 70px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
   }
   .widgetError {
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
   }
   .popup-image {
    background: url('static/popupImg.png');
    width: 100%;
    height: 160px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
</style>  
`;
