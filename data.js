const authors =  [
  {first_name: 'Tana',
  last_name: 'French',
  birth_year: 1977,
  books: [
  {title: 'The Witch Elm', pub_year: '2017'},
  {title: 'In The Woods', pub_year: '2015'}
  ]
  },
  {first_name: 'Agatha',
  last_name: 'Christie',
  birth_year: 1890,
  books: [
  {title: 'Murder On The Orient Express', pub_year: 1925},
  {title: 'Ten Little Indians', pub_year: 1920}
  ]
  },
  {first_name: 'Dorothy',
  last_name: 'Sayers',
  birth_year: '1893',
  books: [
  {title: 'Whose Body', pub_year: 1923},
  {title: 'Gaudy Night', pub_year: 1935},
  {title: 'Strong Poison', pub_year: 1930}
  ]
  },
  {first_name: 'Arthur Conan',
  last_name: 'Doyle',
  birth_year: 1859,
  books: [
  {title: 'Adventures of Sherlock Holmes', pub_year: 1919},
  {title: 'The Lost World', pub_year: 1912}
  ]
  },
  {first_name: 'Patricia',
  last_name: 'Highsmith',
  birth_year: 1921,
  books: [
  {title: 'The Talented Mr. Ripley', pub_year: 1955},
  {title: 'The Price of Salt', pub_year: 1952}
  ]
  },
  {first_name: 'Steven',
  last_name: 'King',
  birth_year: 1947,
  books: [
  {title: 'Carrie', pub_year: 1955},
  {title: 'It', pub_year: 1986},
  {title: 'The Shining', pub_year: 1977}
  ]
  },
  {first_name: 'Raymond',
  last_name: 'Chandler',
  birth_year: 1888,
  books: [
  {title: 'The Big Sleep', pub_year: 1939},
  {title: 'The Long Goodbye', pub_year: 1953},
  {title: 'Farewell My Lovely', pub_year: 1940}
  ]
  },
  {first_name: 'Walter',
  last_name: 'Mosely',
  birth_year: 1952,
  books: [
  {title: 'Devil in a Blue Dress', pub_year:1990 },
  {title: 'The Long Fall', pub_year:2009 }
  ]
  },
  {first_name: 'Ruth',
  last_name: 'Rendell',
  birth_year: 1930,
  books: [
  {title: 'A Judgement In Stone', pub_year: 1977},
  {title: 'Not In The Flesh', pub_year: 2007 }
  ]
  },
  {first_name: 'Wilkie',
  last_name: 'Collins',
  birth_year: 1824,
  books: [
  {title: 'The Moonstone', pub_year:1868},
  {title: 'No Name', pub_year:1862 },
  {title: 'Armandale', pub_year:1865 }
  ]
  },
  {first_name: 'Dashiell',
  last_name: 'Hammett',
  birth_year: 1894,
  books: [
  {title: 'The Maltese Falcon', pub_year:1929 },
  {title: 'Red Harvest', pub_year: 1929}
  ]
  },
  {first_name: 'Edgar Allan',
  last_name: 'Poe',
  birth_year: 1809,
  books: [
  {title: 'The Raven', pub_year: 1845},
  {title: 'The Tell-Tale Heart', pub_year: 1843}
  ]
  },
  {first_name: 'Lee',
  last_name: 'Child',
  birth_year: 1954,
  books: [
  {title: 'Killing Floor', pub_year: 1997 },
  {title: 'Past Tense', pub_year: 2018}
  ]
  },
  {first_name: 'John',
  last_name: 'Le Carre',
  birth_year: 1931,
  books: [
  {title: 'Tinker Tailor Soldier Spy', pub_year: 1974 },
  {title: 'A Legacy of Spies', pub_year: 1963},
  {title: 'Smileys People', pub_year: 2017},
  {title: 'Call For The Dead', pub_year: 1961}
  ]
  },
  {first_name: 'Charles',
  last_name: 'Dickens',
  birth_year: 1812,
  books: [
  {title: 'Great Expectations', pub_year: 1861},
  {title: 'Oliver Twist', pub_year: 1839 },
  {title: 'A Christmas Carol', pub_year: 1843 }
  ]
  },
  {first_name: 'Graham',
  last_name: 'Greene',
  birth_year: 1904,
  books: [
  {title: 'The Power and the Glory', pub_year: 1940 },
  {title: 'The End of the Affair', pub_year: 1951}
  ]
  },
  {first_name: 'Daphne',
  last_name: 'Du Maurier',
  birth_year: 1907,
  books: [
  {title: 'Rebecca', pub_year: 1938},
  {title: 'Jamaica Inn', pub_year: 1936}
  ]
  },
  {first_name: 'J.K.',
  last_name: 'Rowling',
  birth_year: 1965,
  books: [
  {title: 'Harry Potter and the Sorcerers Stone', pub_year: 1997 },
  {title: 'Harry Potter and the Chamber of Secrets', pub_year: 1998 },
  {title: 'Harry Potter and Half-Blood Prince', pub_year: 1999 },
  {title: 'Fantastic Beasts and Where to Find Them', pub_year: 2001 }
  ]
  },
  {first_name: 'Mickey',
  last_name: 'Spillane',
  birth_year: 1918,
  books: [
  {title: 'One Lonely Night', pub_year: 1951 },
  {title: 'The Big Kill', pub_year: 1951 },
  {title: 'My Gun Is Quick', pub_year: 1953 }
  ]
  },
  {first_name: 'Stieg',
  last_name: 'Larsson',
  birth_year: 1954,
  books: [
  {title: 'The Girl With The Dragon Tattoo', pub_year: 2005 },
  {title: 'Millenium', pub_year: 2007}
  ]
  },
  {first_name: 'Dennis',
  last_name: 'Lehane',
  birth_year: 1965,
  books: [
  {title: 'Mystic River', pub_year: 2001 },
  {title: 'Shutter Island', pub_year: 2003}
  ]
  },
  {first_name: 'James',
  last_name: 'Ellroy',
  birth_year: 1948,
  books: [
  {title: 'The Black Dahlia', pub_year: 1987},
  {title: 'L.A. Confidential', pub_year: 1990}
  ]
  },
  {first_name: 'Elmore',
  last_name: 'Leonard',
  birth_year: 1925,
  books: [
  {title: 'Rum Punch', pub_year: 1992 },
  {title: 'Get Shorty', pub_year: 1990 },
  {title: 'Raylan', pub_year: 2012 }
  ]
  },
  {first_name: 'John',
  last_name: 'Grisham',
  birth_year: 1955,
  books: [
  {title: 'A Time To Kill', pub_year: 1989 },
  {title: 'The Firm', pub_year: 1991}
  ]
  },
  {first_name: 'P.D.',
  last_name: 'James',
  birth_year: 1920,
  books: [
  {title: 'Cover Her Face', pub_year: 1962},
  {title: 'The Private Patient', pub_year: 2008 }
  ]
  },
  {first_name: 'James',
  last_name: 'Cain',
  birth_year: 1892,
  books: [
  {title: 'Mildred Pierce', pub_year: 1941 },
  {title: 'Double Indemnity', pub_year: 1936}
  ]
  },
  {first_name: 'Ken',
  last_name: 'Follett',
  birth_year: 1949 ,
  books: [
  {title: 'The Pillars of the Earth', pub_year: 1989},
  {title: 'Fall of Giants', pub_year: 2010}
  ]
  },
  {first_name: 'Ian',
  last_name: 'Fleming',
  birth_year: 1908,
  books: [
  {title: 'Casino Royale', pub_year: 1953},
  {title: 'Live and Let Die', pub_year: 1954}
  ]
  },
  {first_name: 'Carlos',
  last_name: 'Zafon',
  birth_year: 1964,
  books: [
  {title: 'The Shadow of the Wind', pub_year: 2001},
  {title: 'The Angels Game', pub_year: 2008 }
  ]
  },
  {first_name: 'Josephine',
  last_name: 'Tey',
  birth_year: 1896,
  books: [
  {title: 'The Daughter of Time', pub_year: 1951},
  {title: 'The Franchise Affair', pub_year: 1948 }
  ]
  },
  {first_name: 'Jim',
  last_name: 'Thompson',
  birth_year: 1906,
  books: [
  {title: 'The Killer Inside Me', pub_year: 1952},
  {title: 'A Hell of a Woman', pub_year: 1954}
  ]
  },
  {first_name: 'Thomas',
  last_name: 'Harris',
  birth_year: 1940,
  books: [
  {title: 'Hannibal', pub_year: 1999},
  {title: 'The Silence of the Lamb', pub_year: 1988 }
  ]
  },
  {first_name: 'Dan',
  last_name: 'Brown',
  birth_year: 1964,
  books: [
  {title: 'The Da Vinci Code', pub_year: 2003},
  {title: 'Angels & Demons', pub_year: 2000}
  ]
  },
  {first_name: 'Mary Higgins',
  last_name: 'Clark',
  birth_year: 1927,
  books: [
  {title: 'Where Are The Children', pub_year: 1975},
  {title: 'All Dressed In White', pub_year: 2015 }
  ]
  },
  {first_name: 'James',
  last_name: 'Patterson',
  birth_year: 1947,
  books: [
  {title: 'Unsolved', pub_year: 2019 },
  {title: 'Zoo', pub_year: 2012}
  ]
  },
  {first_name: 'Ross',
  last_name: 'McDonald',
  birth_year: 1915,
  books: [
  {title: 'The Chill', pub_year: 1964},
  {title: 'The Moving Target', pub_year: 1949}
  ]
  },
  {first_name: 'Edmund',
  last_name: 'Crispin',
  birth_year: 1921,
  books: [
  {title: 'The Moving Toyshop', pub_year:  1946},
  {title: 'Holy Disorders', pub_year: 1945}
  ]
  },
  {first_name: 'Scott',
  last_name: 'Turow',
  birth_year: 1949,
  books: [
  {title: 'Presumed Innocent', pub_year: 1986 },
  {title: 'The Burden of Proof', pub_year: 1990}
  ]
  },
  {first_name: 'David',
  last_name: 'Baldacci',
  birth_year: 1960,
  books: [
  {title: 'Memory Man', pub_year: 2015 },
  {title: 'One Good Deed', pub_year: 2019 }
  ]
  },
  {first_name: 'Dean',
  last_name: 'Koontz',
  birth_year: 1945,
  books: [
  {title: 'Watchers', pub_year: 1987 },
  {title: 'Odd Thomas', pub_year: 2003 }
  ]
  }
]

module.exports = authors;