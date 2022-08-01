import Task from '../models/Task';

export const renderTask = async (req, res) => {

    const tasks = await Task.find().lean(); //lean() sirve para devolver un objeto js y no de mongodb

    res.render("index", { tasks });
}

export const renderAbout = (req, res) => {
    res.render('about');
}

export const createTask = async (req, res) => {
    try {
        
        const task = Task(req.body)
        const taskSaved = await task.save();
    
        console.log(taskSaved);
    
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export const renderTaskEdit = async (req, res) => {

    const task = await Task.findById(req.params.id).lean();

    res.render('edit', { task });
}

export const editTask = async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
  
    const { id } = req.params;
  
    await Task.findByIdAndUpdate(id, req.body);
  
    res.redirect("/");
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
  
    await Task.findByIdAndDelete(id);
  
    res.redirect("/");
}

export const taskToggleDone = async (req, res) => {
    const { id } = req.params;
  
    const task = await Task.findById(id);
  
    task.done = !task.done;
  
    await task.save();
  
    console.log(task);
  
    res.redirect("/");
}

