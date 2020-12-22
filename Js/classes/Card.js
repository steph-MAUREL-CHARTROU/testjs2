import CoopDom from "./CoopDom.js";
export default class Card extends CoopDom {
    constructor(question, answer, column) {
        super();
        this.question = question;
        this.answer = answer;
        this.column = column;
        
        // construction du dom de la carte
        this.domElements = this.render();

        // gestion des événements
        this.domElements.button_remove.onclick = () => {
            console.log("click sur le bouton pour supprimer une carte");
            this.column.removeCard(this);
        }

        
    }
    render = () => {
        console.log("Dans la fonction render de Card");
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const article = this.createAddDomElt(
            "article",
            "",
            this.column.domElements.section_cards
        );
        // Ici, il faut maintenant créer les élément du dom qui constituent une carte
        // soit pour commencer l'affichage de la question en h3
        // l'affichage de la réponse en paragraphe. Ces deux derniers éléments 
        // sont les fils direct de l'élément du dom "article"
        const question = this.createAddDomElt(
            "h3",
            this.question,
            article
        );
        const answer = this.createAddDomElt(
            "p",
            this.answer,
            article
        );

        const button_remove = this.createAddDomElt(
            "button",
            "Supprimer la carte",
            article
        );

        /**
         * Créer un bouton qui va afficher au click un formulaire
         * qui permettra de modifier la carte (la question et/ou la réponse )
         * 
         */

          const button_edit = this.createAddDomElt(
              "button",
              "modifier la carte",
              article
          );

          const label_question= this.createAddDomElt(
              "label",
              "Question",
              form_edit
          );

          const input_question = this.createAddDomElt (
              "input",
              "",
              form_edit,
              { " type": " text", "value" :this.question}
          );
          
          
        return {
            "article": article,
            "question": question,
            "answer": answer,
            "button_remove": button_remove
        };

    }
}