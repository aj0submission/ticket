export default class TicketModal {

    constructor(main_about) {
        this.about = main_about;
        this.init();
    }

    init() {
        [].forEach.call(this.about, (about) => {
            const mask = about.querySelector('#modal-mask');
            const open = about.querySelector('#modal-open');
            const close = about.querySelector('#modal-close');
            const back = about.querySelector('#modal-back');

            open.addEventListener("click", () => {
                this.TicketInfo(mask);
            });

            close.addEventListener("click", () => {
                this.TicketInfo(mask);
            });

            back.addEventListener("click", () => {
                this.TicketInfo(mask);
            });
        });
    }

    TicketInfo(mask) {
        mask.classList.toggle('is-show');
    }

}