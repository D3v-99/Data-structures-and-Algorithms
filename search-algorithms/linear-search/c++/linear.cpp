//
// Created by adolph on 26/03/2024.
//

#include <iostream>
#include <vector>

using namespace std;

int main() {
    const int target = 8;
    vector<int> arr = {5, 3, 8, 2, 9, 4};
    bool found = false;

    for (int i = 0; i < arr.size(); i++) {
        if (arr.at(i) == target) {
            cout << "Number " << target << " found at index " << i << endl;
            found = true; // Set found flag to true
            break; // Exit the loop once the target is found
        }
    }

    if (!found) {
        cout << "Number " << target << " not found in the array." << endl;
    }

    return 0;
}
