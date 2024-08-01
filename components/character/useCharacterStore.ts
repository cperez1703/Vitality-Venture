import { create } from 'zustand';

interface CharacterState {
  hat: string | null;
  eye: string | null;
  shirt: string | null;
  pants: string | null;
  shoes: string | null;
  accessories: string | null;
  ownedHats: string[];
  ownedEyes: string[];
  ownedShirts: string[];
  ownedPants: string[];
  ownedShoes: string[];
  ownedAccessories: string[];
  setHat: (hat: string | null) => void;
  setEye: (eye: string | null) => void;
  setShirt: (shirt: string | null) => void;
  setPants: (pants: string | null) => void;
  setShoes: (shoes: string | null) => void;
  setAccessories: (accessories: string | null) => void;
  addOwnedHat: (hat: string) => void;
  addOwnedEye: (eye: string) => void;
  addOwnedShirt: (shirt: string) => void;
  addOwnedPants: (pants: string) => void;
  addOwnedShoes: (shoes: string) => void;
  addOwnedAccessories: (accessories: string) => void;
}

const useCharacterStore = create<CharacterState>((set) => ({
  hat: null,
  eye: null,
  shirt: null,
  pants: null,
  shoes: null,
  accessories: null,
  ownedHats: [],
  ownedEyes: [],
  ownedShirts: [],
  ownedPants: [],
  ownedShoes: [],
  ownedAccessories: [],
  setHat: (hat) => set({ hat }),
  setEye: (eye) => set({ eye }),
  setShirt: (shirt) => set({ shirt }),
  setPants: (pants) => set({ pants }),
  setShoes: (shoes) => set({ shoes }),
  setAccessories: (accessories) => set({ accessories }),
  addOwnedHat: (hat) => set((state) => ({ ownedHats: [...state.ownedHats, hat] })),
  addOwnedEye: (eye) => set((state) => ({ ownedEyes: [...state.ownedEyes, eye] })),
  addOwnedShirt: (shirt) => set((state) => ({ ownedShirts: [...state.ownedShirts, shirt] })),
  addOwnedPants: (pants) => set((state) => ({ ownedPants: [...state.ownedPants, pants] })),
  addOwnedShoes: (shoes) => set((state) => ({ ownedShoes: [...state.ownedShoes, shoes] })),
  addOwnedAccessories: (accessories) => set((state) => ({ ownedAccessories: [...state.ownedAccessories, accessories] })),
}));

export default useCharacterStore;
