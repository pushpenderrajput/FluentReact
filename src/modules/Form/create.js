import React, { useState, useEffect } from "react";
import DynamicForm from "../../FormController/FormRenderer"
import data from "./masterjson.json"

const FormPage = () => {
    return (
      <DynamicForm data={data}/>
    )

}
export default FormPage;
