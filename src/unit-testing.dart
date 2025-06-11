void main() {
  testWidgets('Login form is displayed', (WidgetTester tester) async {
    await tester.pumpAndSettle();
    expect(find.byKey(const Key('user_id_field')), findsOneWidget);
    expect(find.byKey(const Key('password_field')), findsOneWidget);
  });

  testWidgets('Login button is displayed', (WidgetTester tester) async {
    await tester.pumpAndSettle();
    expect(find.byKey(const Key('login_button')), findsOneWidget);
  });

  testWidgets('Toggle password visibility', (WidgetTester tester) async {
    await tester.pumpAndSettle();
    final IconButton toggleButton = tester.widget(find.byKey(const Key('toggle_password_visibility')));
    expect(toggleButton.onPressed, isNotNull);
  });

  testWidgets('Validate form', (WidgetTester tester) async {
    await tester.pumpAndSettle();
    final Form form = tester.widget(find.byKey(const Key(Form)));
    expect(form.key, isNotNull);

  testWidgets('Login', (WidgetTester tester) async {
    await tester.pumpAndSettle();
    final ElevatedButton loginButton = tester.widget(find.byKey(const Key('login_button')));
    expect(loginButton.onPressed, isNotNull);
  });
}