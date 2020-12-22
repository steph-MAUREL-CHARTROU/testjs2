import Card from "./Card.js";
import CoopDom from "../CoopDom.js";

export default class Column extends CoopDom {
    constructor(title, cards) {
        super();
        this.title = title;
        this.cards = cards; 

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Appel de la méthode qui va afficher les cartes
        //+ l'ajout des questions /reponses
        this.renderCards();
        this.AddForm();

    
        
    }
    AddForm =() => {
        
        this.domElements.button.onclick = () => {
            console.log("click sur le bouton d'ajout d'une carte");
            console.log("this : ", this);
            this.domElements.form_addition.hidden = false;
            this.addCard();
           
        };
        this.domElements.form_addition.onsubmit = (event) => {
            console.log ( " Formulaire pour ajouter une carte avec bouton submit");
            event.preventDefault();

            const add_question = this.domElements.add_question.value;
            const add_answer = this.domElements.add_answer.value;

            this.domElements.add_question.textContent = add_question;
            this.domElements.add_answer.textContent = add_answer;
            console.log ( add_answer);
            this.addCard(add_question, add_answer, this);

            this.domElements.form_creation.hidden = true;
        }
    }

    addCard = () => {
        console.log("dans addCard");
        new Card("Question", "Réponse", this); // this représente l'instance de la colonne
    }
    removeCard = (card) => {
        console.log("Dans removeCard");
        card.domElements.article.remove();// supprime l'élément du dom article de la carte
    }
    renderCards = () => {
        // il faut faire en sorte que les cartes contenues dans this.cards
        // génèrent des éléments du dom en passant par la class "Card"
        for(let card of this.cards) {
            new Card(card.question, card.reponse, this);
        }

    }
    render = () => {
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const section = this.createAddDomElt("section", "", document.querySelector("#board"),{"class":"column col-3"});
        const title = this.createAddDomElt("h2", this.title, section);
        const button = this.createAddDomElt("button", "Ajouter une carte", section, {"class":"btn btn-success"});
        const section_cards = this.createAddDomElt("section", "", section ,{"class":"cards"});
        
        
        // création du formulaire
        const form_addition = this.createAddDomElt(
            "form",
            "",
            section
        );
        const label_question = this.createAddDomElt(
            "label",
            "Question",
            form_addition
        );
        const add_question = this.createAddDomElt(
            "input",
            "",
            form_addition,
            {"type": "text", "value": this.question, "class": "form-control"}
        );
        const label_answer = this.createAddDomElt(
            "label",
            "Réponse",
            form_addition
        );
        const add_answer = this.createAddDomElt(
            "input",
            "",
            form_addition,
            {"type": "text", "value": this.answer, "class": "form-control"}
        );
        const button_submit = this.createAddDomElt(
            "input",
            "",
            form_addition,
            {"type": "submit", "value": "valider", "class": "btn btn-primary mt-3 mb-3"}
        );
        
        form_addition.hidden = true;

        return {
            "section": section,
            "title": title,
            "button": button,
            "section_cards": section_cards,
            "form_addition": form_addition,
            "add_question" : add_question,
            "add_answer" : add_answer,

        };
    }
}