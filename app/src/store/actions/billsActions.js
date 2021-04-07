export const addIncBill = (bill) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newIncBills = [...profile.bills.inc, bill];

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        bills: {
          ...profile.bills,
          inc: newIncBills,
        },
      })
      .then(() => {
        console.log('bill inc added');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addExpBill = (bill) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const newExpBills = [...profile.bills.inc, bill];

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        bills: {
          ...profile.bills,
          inc: newExpBills,
        },
      })
      .then(() => {
        console.log('bill inc added');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
