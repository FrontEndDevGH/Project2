import Popup from '../Popup/Popup.vue'

export default {
    components: {
        Popup
    },
    data () {
        return {
            isPopup: false,
            popupSettings: [],
            blocksSettings: []
        }
    },
    methods: {
        showPopup (settings) {
            this.isPopup = true
            this.popupSettings = settings
        },
        closePopup () {
            this.isPopup = false
        },
        getFieldsData () {
            // Косые кавычки для удобства чтения параметров.
            let someJson = `[ { "bText"    : "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
                            "settings" : [ { "Name"       : "Ширина",
                                            "stringType" : "int",
                                            "fieldType"  : "input",
                                            "fieldValue" : "600",
                                            "fieldSize"  : 4 },
                                        { "Name"       : "Высота",
                                            "stringType" : "int",
                                            "fieldType"  : "input",
                                            "fieldValue" : "500",
                                            "fieldSize"  : 4 } ] },
                            { "bText"    : "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
                                "settings" : [ { "Name"       : "Скрытое",
                                                "stringType" : "int",
                                                "fieldType"  : "select",
                                                "fieldValue" : [ "Да",
                                                                "Нет" ] } ] } ]`
            this.blocksSettings = JSON.parse(someJson)
        }
    },
    mounted () {
        this.getFieldsData()
    }
}
