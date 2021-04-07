export const addToTrimester = (bill) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const years = { ...profile.years };
    const year = `Year_${new Date().getFullYear()}`;
    const month = new Date().getMonth() + 1;
    let Trim;
    let T;

    if (month >= 1 && month < 4) {
      Trim = 'T1';
      T = [...profile.year.Trimesters.T1, bill];
    } else if (month >= 4 && month < 7) {
      Trim = 'T2';
      T = [...profile.year.Trimesters.T2, bill];
    } else if (month >= 7 && month < 10) {
      Trim = 'T3';
      T = [...profile.year.Trimesters.T3, bill];
    } else if (month >= 10 && month <= 12) {
      Trim = 'T4';
      T = [...profile.year.Trimesters.T4, bill];
    }

    firestore
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        years: {
          ...profile.years,
          [year]: {
            Trimesters: {
              ...profile.years.Trimesters,
              [Trim]: T,
            },
          },
        },
      })
      .then(() => {
        console.log('Trim updated');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
