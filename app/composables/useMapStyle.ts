export default function () {
  const { origin } = useRequestURL();
  const mode = useColorMode();

  return computed(() => `${origin}/assets/styles/${mode.value}/style.json`);
}
