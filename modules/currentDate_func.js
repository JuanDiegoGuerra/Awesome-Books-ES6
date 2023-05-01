// function to display the date with an specific format
export const currentDate = new Date().toLocaleString('default', {
  month: 'long', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
});