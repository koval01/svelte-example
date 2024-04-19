import { writable, type Writable } from 'svelte/store';

interface Data {
    data: string;
    loading: boolean;
}

export const data: Writable<Data> = writable({
    data: "",
    loading: true
});
