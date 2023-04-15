import React from 'react';
import Confetti from 'react-confetti'
import Die from './Die'
export default function App() {

  /**
   * Les étapes pour créer le jeu Tenzie selon ma logique
   * 
   * 
   * Etape 1 : Créer le squelette du jeu 
   *  1.1 : Un component qui affichera les 10 dés
   *  1.2 : Un boutton pour roll les dés
   * Etape 2 : Créer la liste des dés 
   *  2.1 : Création useState() car il y a un changement d'état pour les dés
   *  2.2 : Création d'une fonction pour changer la valeur d'un dé (entre 1 et 6)
   *  2.3 : Création d'une fonction pour créer la liste des dés sous forme d'objet
   *  2.4 : 
   * 
   * Etape 3 : Créer une fonction qui va changer l'état de s'il est maintenu ou non
   * Etape 4 : Créer une fonction qui va changer aléatoirement la valeur des dés sans toucher aux dés maintenus. 
   * 
   */


  /**
   * Notre variable d'état est dice 
   * Elle comprend les propriétés définient dans allNewDice()
   */
  const [dice,setDice] = React.useState(allNewDice())

  /**
   * Condition de victoire
   * Si true, victoire
   * Si false, on continue le jeu
   */
  const [tenzies, setTenzies] = React.useState(false)

  console.log(dice)
  /**
   * 
   * @returns Valeur aléatoire entre 1 et 6
   */
  function randomValue(){
    return Math.ceil(Math.random() * 6)
  }

  /**
   * Les propriétes de Dice sont : 
   * Value : une valeur entre 1 et 6
   * held : bool si true, le dice reste figé et ne change pas, si false la valeur peut être changée
   * id : identifié le dé
   * @returns Liste de dés 
   */
  function allNewDice() {
    const newArray = []
    for(let i = 0; i < 10; i++) {
        const newDie = {
            value: randomValue(),
            held: false,
            id: i + 1
        }
        newArray.push(newDie)
    }
    return newArray
}

 
  /**
   * On modifie l'état held d'un dé afin qu'elle ne soit pas modifiable
   * @param id : on récupère l'ID du dé en cliquant dessus
   * On change l'état du dé avec setDice()
   * On récupère l'ancienne liste de dé 
   * puis on map pour parcourir chaque dé afin de récupérer le dé.id correspondant avec ce qu'on a cliqué
   * Une fois qu'on a récupéré le dé, on modifie l'état de held => soit true ou false
   * 
   */
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? 
            {...die, held: !die.held} : 
            die
    }))
}

  /**
   * Fonction qui aura deux rôles 
   * Si !tenzies est vraie, cela signifie que tous les dés ne montrent pas la même valeur 
   * setDice va permet de récupérer la liste actuelle des dés
   * Puis map pour récupérer les anciennes valeurs des dés
   * Enfin, on vérifie si le dé est maintenu ou non 
   * Si non, on change sa valeur.
   * 
   * Si la condition tenzies est vrai, cela signifie que les dés montrent la même valeur donc on utilise la fonction allNewDice pour créer un nouvel array de dés puis on remet setTenzies à false
   */
  function rollUnheldDice() {
    console.log(tenzies)
    if (!tenzies) {
        console.log(tenzies)
        setDice((oldDice) => oldDice.map((die, i) =>
            die.held ? 
                die : 
                { value: randomValue(), held: false, id: i + 1 }
        ))
    } else {
        setDice(allNewDice())
        setTenzies(false)
    }
}

  const diceElements = dice.map((die,index) => (
    <Die key={index} {...die} hold={() => holdDice(die.id)} />
  ))

  React.useEffect(() => {
    const firstValue = dice[0].value
    const allHeld = dice.every(die => die.held)
    const allSameNumber = dice.every(die => die.value === firstValue)
    if(allHeld && allSameNumber) {
        setTenzies(true)
    }
  }, [dice])

  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollUnheldDice}>
          {tenzies ? "Reset Game" : "Roll"}
      </button>
    </main>
  );
}


