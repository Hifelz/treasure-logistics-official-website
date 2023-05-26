import React, { useState, useEffect } from "react";

const Form = () => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
    message: "",
  });

  const [emptyState, setEmptyState] = useState(true);

  const handleChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const checkEmptyState = Object.keys(formFields).find(
      (field) => formFields[field] === ""
    );

    if (checkEmptyState === true) {
      setEmptyState(true);
    } else {
      setEmptyState(false);
    }
  }, [formFields]);

  return (
    <section class="text-gray-600 body-font section">
      <div class="container px-5 pt-24  mx-auto flex flex-wrap justify-start">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 items-center">
          <h2
            className="title mb-5 lg:mb-10 text-center max-w-[920px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Entre em contato
            com a nossa equipe
            de atendimento
          </h2>
          <p
            class="leading-relaxed text-center mb-3 text-[30px] font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Estamos <em>prontos</em> para <em> atende-los!</em>
          </p>
        </div>
        <div
          class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form
            action="https://getform.io/f/7602fbcb-ef2f-46c9-9486-08de1e68b08d"
            method="POST"
            id="formlink"
            required
          >
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
               Seu Nome
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="full-name"
                name="fullName"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="number" class="leading-7 text-sm text-gray-600">
                Telefone
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                id="number"
                name="number"
                required
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                onChange={(e) => handleChange(e)}
                cols="30"
                row="20"
                name="message"
                type="text"
                class="w-full h-[128px] bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              disabled={emptyState}
              className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white"
            >
              Enviar
            </button>
          </form>
        
        </div>
      </div>
    </section>
  );
};

export default Form;
