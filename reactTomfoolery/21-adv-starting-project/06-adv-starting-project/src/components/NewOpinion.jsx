import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const {addOpinion} = use(OpinionsContext);
  

  async function handleForm (prevState, formData) {
    const name = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");
    let errors = [];
    if (title.trim() < 5) {
      errors.push("Title must be at least five characters long.");
    }
    if (title.trim() < 10 || body.trim() > 300) {
      errors.push("Opinion must be between 10 and 300 characters long");
    }
    if (!name.trim()) {
      errors.push("Please provide your name.");
    }
    if (errors.length > 0) {
      return { errors, enteredValues: {
        title, body, name
      }};
    }

    // submit to backend 
    await addOpinion({title, body, userName: name});

    return {erors: null}
  }
  const [formState, formFunction, pending] = useActionState(handleForm, {errors: null});


  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formFunction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.name} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        {formState.errors && <ul className="errors">
            {formState.errors.map((error) => <li key={error}>{error}</li>)}
          </ul>}
          <Submit />
        
      </form>
    </div>
  );
}
