export default {
    data () {
        return {
            // Сards сustomizing
            cards: [
                {
                    topNote: 'Сказочное заморское явство',
                    topNoteHover: 'Котэ не одобряет?',
                    productTitle: 'Нямушка',
                    productTitleDesc: 'с фуа-гра',
                    bonusFirst: '<span class="text-bold">10</span> порций<br>',
                    bonusSecond: 'мышь в подарок',
                    productQuantity: '0,5',
                    callAction: 'Чего сидишь? Порадуй котэ, <button>купи.</button>',
                    productInfo: 'Печень утки разварная с артишоками',
                    productInactive: 'Печалька, фуа-гра закончился',
                    disabled: ''
                },
                {
                    topNote: 'Сказочное заморское явство',
                    topNoteHover: 'Котэ не одобряет?',
                    productTitle: 'Нямушка',
                    productTitleDesc: 'с рыбой',
                    bonusFirst: '<span class="text-bold">40</span> порций<br>',
                    bonusSecond: '<span class="text-bold">2</span> мыши в подарок',
                    productQuantity: '2',
                    callAction: 'Чего сидишь? Порадуй котэ, <button>купи.</button>',
                    productInfo: 'Головы щучьи с чесноком да свежайшая сёмгушки',
                    productInactive: 'Печалька, с рыбой закончился',
                    disabled: ''
                },
                {
                    topNote: 'Сказочное заморское явство',
                    topNoteHover: 'Котэ не одобряет?',
                    productTitle: 'Нямушка',
                    productTitleDesc: 'с курой',
                    bonusFirst: '<span class="text-bold">100</span> порций<br>',
                    bonusSecond: '<span class="text-bold">5</span> мышей в подарок<br> заказчик доволен',
                    productQuantity: '5',
                    callAction: 'Чего сидишь? Порадуй котэ, <button>купи.</button>',
                    productInfo: 'Филе из цыплят с трюфелями в бульоне',
                    productInactive: 'Печалька, с курой закончился',
                    disabled: 'true'
                }
            ]
        }
    },
    methods:{
        // Cards selection switch method
        checkActivity(index, disabled) {
            if (disabled) return;
            let el = document.getElementById('card-' + index)
            el.classList.toggle('card-active');
            if (el.classList.contains('card-active')) {
                el.addEventListener('mouseenter', () => {
                    if (el.classList.contains('card-active')) {
                        el.classList.add('card-active-hover');
                    }
                });
            } else {
                el.classList.remove('card-active-hover');
            }
        }
    }
}