class Github {
  constructor() {
    this.client_id = 'd4760cdbf7142551e41b';
    this.client_secret = '18b2d04200e232f3b4a67b1c3518a53c413ded0d';
  }

  async getUser(user) {
    // gelen userla beraber istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // gelen cevabı jsona çevirme
    const profile = await profileResponse.json();

    // işlenmiş veriyi fonksiyonun çağrıldığı yere gönderme
    return profile;
  }
}

export default Github;

// hatayı yönetme
//  try {
//    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

//    // gelen cevabı jsona çevirme
//    const profile = await profileResponse.json();

//    return profile;
//  } catch (err) {
//    console.log(err);
//  }
