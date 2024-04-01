import Button from './src/Button.vue'

const AxButton = {
  install: (app: any) => {
    app.component(Button.name, Button)
  }
}

export default AxButton