console.log("Welcome to Geaux Engineering");

public class GradualTextDisplay {

    // Method to display text letter by letter with a delay
    public static void displayTextWithDelay(String text, int delayInMillis) {
        for (char c : text.toCharArray()) {
            System.out.print(c); // Print each character without a newline
            try {
                Thread.sleep(delayInMillis); // Pause for the specified delay
            } catch (InterruptedException e) {
                System.err.println("Thread interrupted: " + e.getMessage());
                Thread.currentThread().interrupt(); // Restore interrupted status
            }
        }
        System.out.println(); // Move to the next line after the text is displayed
    }

    public static void main(String[] args) {
        // Example usage
        String message = "Hello, World!";
        int delay = 200; // Delay in milliseconds (200ms = 0.2 seconds)

        System.out.println("Displaying text with delay:");
        displayTextWithDelay(message, delay);
    }
}
