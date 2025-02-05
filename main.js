!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-btn",inactiveButtonClass:"modal__submit-btn_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},t=(e,t,o)=>{e.querySelector(`#${t.id}-error`).textContent="",t.classList.remove(o.inputErrorClass)},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?r(t,o):n(t,o)},r=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},n=(e,t)=>{e.disabled=!1,e.classList.remove(t.inactiveButtonClass)},a=document.querySelector(".profile__edit-btn"),l=document.querySelector(".profile__add-card"),c=document.querySelector(".profile__name"),s=document.querySelector(".profile__description"),i=document.querySelector("#edit-modal"),d=i.querySelector("#edit-profile"),u=i.querySelector(".modal__close-btn"),m=i.querySelector(".modal__submit-btn"),p=i.querySelector("#profile-name-input"),_=i.querySelector("#profile-description-input"),f=document.querySelector("#card-modal"),y=f.querySelector(".modal__close-btn"),v=f.querySelector(".modal__submit-btn"),S=f.querySelector(".modal__form"),g=f.querySelector("#add-card-link"),b=f.querySelector("#add-card-name"),q=document.querySelector("#preview-image"),h=q.querySelector(".modal__close-btn"),w=q.querySelector(".modal__image"),k=q.querySelector(".modal__desc"),x=(q.querySelector("#alt_text"),document.querySelector("#card-template")),E=document.querySelector(".cards__list");function L(e){const t=x.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),r=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),a=t.querySelector(".card__delete-button");return o.textContent=e.name,r.src=e.link,r.alt=e.altText,n.addEventListener("click",(()=>{n.classList.toggle("card__like-button_liked")})),a.addEventListener("click",(()=>{t.remove()})),r.addEventListener("click",(()=>{C(q),k.textContent=e.name,w.src=e.link,w.alt=e.altText})),t}function C(e){e.classList.add("modal_opened"),document.addEventListener("keydown",z),e.addEventListener("click",B)}function T(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",z),e.removeEventListener("click",B)}function z(e){if("Escape"===e.key){const e=document.querySelector(".modal_opened");e&&T(e)}}function B(e){e.target===e.currentTarget&&T(e.currentTarget)}var j;a.addEventListener("click",(()=>{var o,r;p.value=c.textContent,_.value=s.textContent,o=d,r=e,[p,_].forEach((e=>{t(o,e,r)})),C(i)})),u.addEventListener("click",(()=>{T(i)})),l.addEventListener("click",(()=>{C(f)})),y.addEventListener("click",(()=>{T(f)})),h.addEventListener("click",(()=>{T(q)})),d.addEventListener("submit",(function(t){t.preventDefault(),c.textContent=p.value,s.textContent=_.value,T(i),t.target.reset(),disableButton(m,e)})),S.addEventListener("submit",(function(t){t.preventDefault();const o=L({name:b.value,link:g.value});E.prepend(o),T(f),t.target.reset(),disableButton(v,e)})),[{name:"Griffin Wooldridge",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",altText:"Red Bridge"},{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",altText:"Snowy cabin"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",altText:"Sunny tunnel"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",altText:"Bridge over forest"},{name:"A very long bridge, over the forest and through the trees",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",altText:"Cafe tables with customers"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",altText:"Resturant facade"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",altText:"Mountain viewed through a window"}].forEach((e=>{const t=L(e);E.prepend(t)})),j=e,document.querySelectorAll(j.formSelector).forEach((e=>{((e,r)=>{const n=Array.from(e.querySelectorAll(r.inputSelector)),a=e.querySelector(r.submitButtonSelector);o(n,a,r),n.forEach((l=>{l.addEventListener("input",(function(){((e,o,r)=>{o.validity.valid?t(e,o,r):((e,t,o,r)=>{e.querySelector(`#${t.id}-error`).textContent=o,t.classList.add(r.inputErrorClass)})(e,o,o.validationMessage,r)})(e,l,r),o(n,a,r)}))}))})(e,j)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDekNDLFlBQWMrRSxFQUN6Qm5GLEVBQVFLLFVBQVVhLElBQUlqQixFQUFPTCxnQkFBZ0IsRUFXM0NzRixDQUFlbkYsRUFBUUMsRUFBU0EsRUFBUW9GLGtCQUFtQm5GLEVBRzdELEVBeUNJZ0YsQ0FBbUJsRixFQUFRQyxFQUFTQyxHQUNwQ00sRUFBa0JDLEVBQVd3RSxFQUFlL0UsRUFDOUMsR0FBRSxHQUNGLEVBTUE0RSxDQUFrQjlFLEVBQVFFLEVBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3N1Ym1pdC1idG5cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc3VibWl0LWJ0bl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXRFbCwgZXJyb3JNc2csIGNvbmZpZykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0VsID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gIGVycm9yTXNnRWwudGV4dENvbnRlbnQgPSBlcnJvck1zZztcbiAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgaGlkZUlucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dEVsLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICBlcnJvck1zZ0VsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXRFbCwgY29uZmlnKSA9PiB7XG4gIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXRFbCwgaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZSwgY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWwsIGNvbmZpZyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiAhaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbCwgY29uZmlnKSA9PiB7XG4gIGlmIChoYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWwsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgZW5hYmxlQnV0dG9uKGJ1dHRvbkVsLCBjb25maWcpO1xuICB9XG59O1xuXG5jb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsLCBjb25maWcpID0+IHtcbiAgYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbn07XG5cbmNvbnN0IGVuYWJsZUJ1dHRvbiA9IChidXR0b25FbCwgY29uZmlnKSA9PiB7XG4gIGJ1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gIGJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUoY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWwsIGlucHV0TGlzdCwgY29uZmlnKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQsIGNvbmZpZyk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoZm9ybUVsLCBjb25maWcpID0+IHtcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbChjb25maWcuaW5wdXRTZWxlY3RvcikpO1xuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsLCBpbnB1dEVsLCBjb25maWcpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKGNvbmZpZykgPT4ge1xuICBjb25zdCBmb3JtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbCkgPT4ge1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCwgY29uZmlnKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZW5hYmxlVmFsaWRhdGlvbixcclxuICBzZXR0aW5ncyxcclxuICByZXNldFZhbGlkYXRpb24sXHJcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JpZmZpbiBXb29sZHJpZGdlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNy1waG90by1ieS1ncmlmZmluLXdvb2xkcmlkZ2UtZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgICBhbHRUZXh0OiBcIlJlZCBCcmlkZ2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFsIFRob3JlbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8xLXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcclxuICAgIGFsdFRleHQ6IFwiU25vd3kgY2FiaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVzdGF1cmFudCB0ZXJyYWNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxyXG4gICAgYWx0VGV4dDogXCJTdW5ueSB0dW5uZWxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQW4gb3V0ZG9vciBjYWZlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMy1waG90by1ieS10dWJhbnVyLWRvZ2FuLWZyb20tcGV4ZWxzLmpwZ1wiLFxyXG4gICAgYWx0VGV4dDogXCJCcmlkZ2Ugb3ZlciBmb3Jlc3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQSB2ZXJ5IGxvbmcgYnJpZGdlLCBvdmVyIHRoZSBmb3Jlc3QgYW5kIHRocm91Z2ggdGhlIHRyZWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNC1waG90by1ieS1tYXVyaWNlLWxhc2NoZXQtZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgICBhbHRUZXh0OiBcIkNhZmUgdGFibGVzIHdpdGggY3VzdG9tZXJzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy81LXBob3RvLWJ5LXZhbi1hbmgtbmd1eWVuLWZyb20tcGV4ZWxzLmpwZ1wiLFxyXG4gICAgYWx0VGV4dDogXCJSZXN0dXJhbnQgZmFjYWRlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vdW50YWluIGhvdXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNi1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgICBhbHRUZXh0OiBcIk1vdW50YWluIHZpZXdlZCB0aHJvdWdoIGEgd2luZG93XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHByb2ZpbGVFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ0blwiKTtcclxuY29uc3QgY2FyZE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtY2FyZFwiKTtcclxuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XHJcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XHJcblxyXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbW9kYWxcIik7XHJcbmNvbnN0IGVkaXRGb3JtRWxlbWVudCA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZVwiKTtcclxuY29uc3QgZWRpdE1vZGFsQ2xvc2VCdG4gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBlZGl0TW9kYWxTdWJtaXRCdG4gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc3VibWl0LWJ0blwiKTtcclxuY29uc3QgZWRpdE1vZGFsTmFtZUlucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1uYW1lLWlucHV0XCIpO1xyXG5jb25zdCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXHJcbik7XHJcblxyXG5jb25zdCBjYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtbW9kYWxcIik7XHJcbmNvbnN0IGNhcmRNb2RhbENsb3NlQnRuID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ0blwiKTtcclxuY29uc3QgY2FyZFN1Ym1pdEJ0biA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zdWJtaXQtYnRuXCIpO1xyXG5jb25zdCBjYXJkRm9ybSA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xyXG5jb25zdCBjYXJkTGlua0lucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbGlua1wiKTtcclxuY29uc3QgY2FyZE5hbWVJbnB1dCA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW5hbWVcIik7XHJcblxyXG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctaW1hZ2VcIik7XHJcbmNvbnN0IHByZXZpZXdNb2RhbENsb3NlQnRuID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ0blwiKTtcclxuY29uc3QgcHJldmlld01vZGFsSW1hZ2VFbGVtZW50ID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xyXG5jb25zdCBwcmV2aWV3TW9kYWxEZXNjRWxlbWVudCA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19kZXNjXCIpO1xyXG5jb25zdCBwcmV2aWV3TW9kYWxBbHRFbGVtZW50ID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWx0X3RleHRcIik7XHJcblxyXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XHJcbmNvbnN0IGNhcmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXHJcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBjb25zdCBjYXJkTmFtZUVsZW1lbnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xyXG4gIGNvbnN0IGNhcmRJbWFnZUVsZW1lbnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gIGNvbnN0IGNhcmRMaWtlQnRuID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcclxuICBjb25zdCBjYXJkRGVsZXRlQnRuID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpO1xyXG5cclxuICBjYXJkTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgY2FyZEltYWdlRWxlbWVudC5zcmMgPSBkYXRhLmxpbms7XHJcbiAgY2FyZEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLmFsdFRleHQ7XHJcblxyXG4gIGNhcmRMaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjYXJkTGlrZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fbGlrZWRcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNhcmREZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjYXJkSW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuTW9kYWwocHJldmlld01vZGFsKTtcclxuICAgIHByZXZpZXdNb2RhbERlc2NFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gICAgcHJldmlld01vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcclxuICAgIHByZXZpZXdNb2RhbEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLmFsdFRleHQ7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NLZXlQcmVzcyk7XHJcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxPdmVybGF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjS2V5UHJlc3MpO1xyXG4gIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsT3ZlcmxheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVzY0tleVByZXNzKGV2dCkge1xyXG4gIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICBjb25zdCBvcGVuZWRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlbmVkXCIpO1xyXG4gICAgaWYgKG9wZW5lZE1vZGFsKSB7XHJcbiAgICAgIGNsb3NlTW9kYWwob3BlbmVkTW9kYWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbE92ZXJsYXkoZXZ0KSB7XHJcbiAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICBjbG9zZU1vZGFsKGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVkaXRGb3JtU3VibWl0KGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gZWRpdE1vZGFsTmFtZUlucHV0LnZhbHVlO1xyXG4gIHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgY2xvc2VNb2RhbChlZGl0TW9kYWwpO1xyXG4gIGV2dC50YXJnZXQucmVzZXQoKTtcclxuICBkaXNhYmxlQnV0dG9uKGVkaXRNb2RhbFN1Ym1pdEJ0biwgc2V0dGluZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYXJkU3VibWl0KGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0VmFsdWVzID0ge1xyXG4gICAgbmFtZTogY2FyZE5hbWVJbnB1dC52YWx1ZSxcclxuICAgIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUsXHJcbiAgfTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGlucHV0VmFsdWVzKTtcclxuICBjYXJkTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICBjbG9zZU1vZGFsKGNhcmRNb2RhbCk7XHJcbiAgZXZ0LnRhcmdldC5yZXNldCgpO1xyXG4gIGRpc2FibGVCdXR0b24oY2FyZFN1Ym1pdEJ0biwgc2V0dGluZ3MpO1xyXG59XHJcblxyXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xyXG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgcmVzZXRWYWxpZGF0aW9uKFxyXG4gICAgZWRpdEZvcm1FbGVtZW50LFxyXG4gICAgW2VkaXRNb2RhbE5hbWVJbnB1dCwgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dF0sXHJcbiAgICBzZXR0aW5nc1xyXG4gICk7XHJcbiAgb3Blbk1vZGFsKGVkaXRNb2RhbCk7XHJcbn0pO1xyXG5cclxuZWRpdE1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbG9zZU1vZGFsKGVkaXRNb2RhbCk7XHJcbn0pO1xyXG5cclxuY2FyZE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgb3Blbk1vZGFsKGNhcmRNb2RhbCk7XHJcbn0pO1xyXG5jYXJkTW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwoY2FyZE1vZGFsKTtcclxufSk7XHJcbnByZXZpZXdNb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xvc2VNb2RhbChwcmV2aWV3TW9kYWwpO1xyXG59KTtcclxuXHJcbmVkaXRGb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUVkaXRGb3JtU3VibWl0KTtcclxuY2FyZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVDYXJkU3VibWl0KTtcclxuXHJcbmluaXRpYWxDYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpdGVtKTtcclxuICBjYXJkTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxufSk7XHJcblxyXG5lbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKTtcclxuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImZvcm1FbCIsImlucHV0RWwiLCJjb25maWciLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiaW5wdXRMaXN0IiwiYnV0dG9uRWwiLCJzb21lIiwiaW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZUJ1dHRvbiIsImVuYWJsZUJ1dHRvbiIsImRpc2FibGVkIiwiYWRkIiwicHJvZmlsZUVkaXRCdG4iLCJkb2N1bWVudCIsImNhcmRNb2RhbEJ0biIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwiZWRpdE1vZGFsIiwiZWRpdEZvcm1FbGVtZW50IiwiZWRpdE1vZGFsQ2xvc2VCdG4iLCJlZGl0TW9kYWxTdWJtaXRCdG4iLCJlZGl0TW9kYWxOYW1lSW5wdXQiLCJlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0IiwiY2FyZE1vZGFsIiwiY2FyZE1vZGFsQ2xvc2VCdG4iLCJjYXJkU3VibWl0QnRuIiwiY2FyZEZvcm0iLCJjYXJkTGlua0lucHV0IiwiY2FyZE5hbWVJbnB1dCIsInByZXZpZXdNb2RhbCIsInByZXZpZXdNb2RhbENsb3NlQnRuIiwicHJldmlld01vZGFsSW1hZ2VFbGVtZW50IiwicHJldmlld01vZGFsRGVzY0VsZW1lbnQiLCJjYXJkVGVtcGxhdGUiLCJjYXJkTGlzdCIsImdldENhcmRFbGVtZW50IiwiZGF0YSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmROYW1lRWxlbWVudCIsImNhcmRJbWFnZUVsZW1lbnQiLCJjYXJkTGlrZUJ0biIsImNhcmREZWxldGVCdG4iLCJuYW1lIiwic3JjIiwibGluayIsImFsdCIsImFsdFRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwib3Blbk1vZGFsIiwibW9kYWwiLCJoYW5kbGVFc2NLZXlQcmVzcyIsImNsb3NlTW9kYWxPdmVybGF5IiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXkiLCJvcGVuZWRNb2RhbCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJyZXNldFZhbGlkYXRpb24iLCJ2YWx1ZSIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicHJlcGVuZCIsIml0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJidXR0b25FbGVtZW50IiwiY2hlY2tJbnB1dFZhbGlkaXR5Iiwic2hvd0lucHV0RXJyb3IiLCJlcnJvck1zZyIsInZhbGlkYXRpb25NZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==