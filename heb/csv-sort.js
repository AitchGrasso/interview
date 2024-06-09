// Make a function that can edit and sort SVC. There should be only one heading, the spacers should be removed, and should there be the same ID, use the 2nd one.

// BOILERPLATE
        // process.stdin.resume();
        // process.stdin.setEncoding('utf8');

        // let stdin = '';
        // process.stdin.on('data', (chunk) => {
        // stdin = `${stdin}${chunk}`;
        // }).on('end', () => {
        //   const lines = stdin.trim().split('\n');
        //   for (const line of lines) {
        //     process.stdout.write(`${line}\n`);
        //   }
        // });

// Example parameter: 
//      ID,Name,Start,End
//      16,Abraham Lincoln,1861,1865

//      ID,Name,Start,End
//      15,James Buchanan,1857,1861

// Example return:
//      ID,Name,Start,End
//      15,James Buchanan,1857,1861
//      16,Abraham Lincoln,1861,1865

// Psuedo code:
//  1. Read input
//  2. Parse into lines
//  3. Identify the headings
//  4. Use dictionary to keep track of rows by ID, replace existing with new one
//  5. Print single header
//  6. Print entries

function csvMerge(input) {
    const header = input[0];  // Header is always at index 0
    const dataMap = new Map(); // Maps for unique id mapping
  
    for (let i = 1; i < input.length; i++) { // Looping through each line
      if (input[i].trim() === header.trim()) {
        continue; // Skip duplicate header lines
      }
  
      const data = input[i].split(','); // splitting by comma
      const id = data[0].trim(); // Holding id number
  
      
      dataMap.set(id, input[i]); // Update the map with the new data for this ID
    }
  
    console.log(header); //print header
  
    for (const entry of dataMap.values()) { //print remainder entries
      console.log(entry);
    }
  }