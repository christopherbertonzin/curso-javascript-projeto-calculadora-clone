class CalcController {
    constructor () {
        this.locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate = "";
        this.initializate();
        this.initButtonsEvents();
    };

    initializate () {
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
            
        }, 1000);

    };

    initButtonsEvents () {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach(btn => {
            btn.addEventListener("click", e => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            });
        });
    };

    setDisplayDateTime () {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    get displayCalc () {
        return this._displayCalcEl.innerHTML;
    };

    set displayCalc (value) {
        this._displayCalcEl.innerHTML = value;
    };

    get displayDate () {
        return this._dateEl.innerHTML;
    };

    set displayDate (value) {
        this._dateEl.innerHTML = value;
    };

    get displayTime () {
        return this._timeEl.innerHTML;
    };

    set displayTime (value) {
        this._timeEl.innerHTML = value;
    }

    get currentDate () {
        return new Date();
    };

    set currentDate (data) {
        this._currentDate = data;
    };

    get 
}