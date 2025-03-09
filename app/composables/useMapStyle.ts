export default function () {
  const { origin } = useRequestURL();
  const mode = useColorMode();

  return computed<string>(
    () => `${origin}/assets/styles/${mode.value}/style.json`,
  );
}
