const referralForm = document.forms['referral'];
const serviceSelector = referralForm['service'];
const patientInfo = document.getElementById('patient');

serviceSelector.addEventListener('change', (e) => {
  referralForm.name = e.target.value;
});

referralForm.addEventListener('change', (e) => {
  switch (e.target.name) {
    case 'patient':
      const value = e.target.value;
      console.log('-- value', value, patientInfo);
      if(value === 'myself') {
        patientInfo.hidden = true;
      } else {
        patientInfo.hidden = false;
      }
      break;
    default:
  }
});
