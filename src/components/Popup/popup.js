export default {
    props: {
        settings: Object
    },
    methods:{
        validate (e) {
            let textValidate = /[',','.']/
            if (textValidate.test(e.target.value)) {
                e.target.value = e.target.value.slice(0, -1)
            }
        },
        setData () {
            let fieldsData = Array.from(document.getElementsByClassName('js-field-value'))
            fieldsData = fieldsData.map((item) => {
                if (item.localName === 'input') {
                    return {
                        name: item.name,
                        value: item.value
                    }
                }
                if (item.localName === 'select') {
                    return {
                        name: item.name,
                        value: item.options[item.selectedIndex].text
                    }
                }
            })
            this.sendData(fieldsData)
        },
        sendData (fieldsData) {
            fieldsData = JSON.stringify(fieldsData)
            let request = new XMLHttpRequest()
             request.open("POST", "/api/save", true)
             request.setRequestHeader("Content-Type", "application/json")
             request.send(fieldsData)

             request.onreadystatechange = () => {
                if (request.readyState != 4) return;
                if (request.status != 200) {
                  console.log(request.status + ': ' + request.statusText);
                } else {
                  console.log(request.responseText);
                }
            }
        }
    }
}
