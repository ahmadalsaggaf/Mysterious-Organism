// Returns a random DNA base
const dnaBases = ['A', 'T', 'C', 'G'];
const testDna = ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C'];

const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randdomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while ( this.dna[randdomIndex] === newBase){
        newBase = returnRandBase();
      }
      this.dna[randdomIndex] = newBase;
      return this.dna
  },

  compareDNA(pAequorPassed) {
    let pAequorCurrent = this.dna;
    let count = 0;

    for (let i in pAequorPassed ){
      if (pAequorPassed[i] === pAequorCurrent[i]){
        count++;
      }
    }
    let precentage =  (count / pAequorCurrent.length)* 100;
    let precentageTodeci = precentage.toFixed();

    console.log(`specimen #${this.specimenNum} and specimen #2 have ${precentageTodeci}% DNA in common`);


  },

  willLikelySurvive(){
    const newObj = this.dna.filter(e => e === 'C' || e ==='G');
    return newObj / this.dna.length >= 0.6;
  }

 }
};

// Test function
const pAequor = pAequorFactory(1, mockUpStrand())
