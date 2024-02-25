const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"],
    },
  ];
  
  let tbody = document.getElementById("tbody");


  for(let i = 0 ; i< employees.length;++i){
    let tr = document.createElement("tr")
    for(let key in employees[i]){
        const td = document.createElement("td")
        if(typeof employees[i][key] === "object"){
            let str = '';
            for(let keys in employees[i][key]){
                str += employees[i][key][keys] + ","
            }
            td.textContent = str;
            tr.append(td)
        }else{
        td.textContent = employees[i][key]
        tr.append(td)
    }
    }
    tbody.append(tr)
  }