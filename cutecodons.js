codonCount = new Object();

codonCount.AAA = 0;
codonCount.AAC = 0;
codonCount.AAG = 0;
codonCount.AAU = 0;
codonCount.ACA = 0;
codonCount.ACC = 0;
codonCount.ACG = 0;
codonCount.ACU = 0;
codonCount.AGA = 0;
codonCount.AGC = 0;
codonCount.AGG = 0;
codonCount.AGU = 0;
codonCount.AUA = 0;
codonCount.AUC = 0;
codonCount.AUG = 0;
codonCount.AUU = 0;

codonCount.CAA = 0;
codonCount.CAC = 0;
codonCount.CAG = 0;
codonCount.CAU = 0;
codonCount.CCA = 0;
codonCount.CCC = 0;
codonCount.CCG = 0;
codonCount.CCU = 0;
codonCount.CGA = 0;
codonCount.CGC = 0;
codonCount.CGG = 0;
codonCount.CGU = 0;
codonCount.CUA = 0;
codonCount.CUC = 0;
codonCount.CUG = 0;
codonCount.CUU = 0;

codonCount.GAA = 0;
codonCount.GAC = 0;
codonCount.GAG = 0;
codonCount.GAU = 0;
codonCount.GCA = 0;
codonCount.GCC = 0;
codonCount.GCG = 0;
codonCount.GCU = 0;
codonCount.GGA = 0;
codonCount.GGC = 0;
codonCount.GGG = 0;
codonCount.GGU = 0;
codonCount.GUA = 0;
codonCount.GUC = 0;
codonCount.GUG = 0;
codonCount.GUU = 0;

codonCount.UAA = 0;
codonCount.UAC = 0;
codonCount.UAG = 0;
codonCount.UAU = 0;
codonCount.UCA = 0;
codonCount.UCC = 0;
codonCount.UCG = 0;
codonCount.UCU = 0;
codonCount.UGA = 0;
codonCount.UGC = 0;
codonCount.UGG = 0;
codonCount.UGU = 0;
codonCount.UUA = 0;
codonCount.UUC = 0;
codonCount.UUG = 0;
codonCount.UUU = 0;

function generateTable(){
  textInput = document.getElementById("fastainput").value;
  fastaentries = readFASTA(textInput);

  for(j=0;j<fastaentries.length;j++){
    incrementCodons(processSequence(fastaentries[j].sequence));
  }

  displayOutput();
}

function processSequence(sequence){
  // Converts sequence to upper case
  // Converts all T's to U's to make sure all sequence is RNA
  // Replaces all other characters with '-' (hyphen)
  processed = '';
  sequence = sequence.toUpperCase();
  for(i=0;i<sequence.length;i++){
    if(sequence[i]=='A' || sequence[i]=='G' || sequence[i]=='C' || sequence[i]=='U'){
      processed += sequence[i];
    }
    else if(sequence[i]=='T'){
      processed += 'U';
    }
    else{
      processed += '-';
    }
  }
  return processed;
}

function incrementCodons(sequence){
  for(k=0;k<sequence.length/3;k++){
    codonCount[sequence.slice(3*k,3*k+3)]++;
  }
}

function displayOutput(output){
  outhtml = ''
  codons = Object.keys(codonCount);
  for(m=0;m<codons.length;m++){
    outhtml += codons[m] + ": " + codonCount[codons[m]].toString() + '<br>';
  }
  document.getElementById('outputArea').innerHTML = outhtml;
}
